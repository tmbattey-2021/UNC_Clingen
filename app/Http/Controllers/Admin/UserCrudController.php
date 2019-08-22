<?php

namespace App\Http\Controllers\Admin;

use App\ExpertPanel;
use App\Http\Requests\UserRequest as StoreRequest;
use App\Http\Requests\UserRequest as UpdateRequest;
use App\Curation;
use App\User;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserCrudController extends CrudController
{
    protected $user = null;

    public function setUp(): void
    {
        $this->user = Auth::user();

        /*
        |--------------------------------------------------------------------------
        | BASIC CRUD INFORMATION
        |--------------------------------------------------------------------------
        */
        $this->crud->setModel(\App\User::class);
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/user');
        $this->crud->setEntityNameStrings('user', 'users');

        /*
        |--------------------------------------------------------------------------
        | BASIC CRUD INFORMATION
        |--------------------------------------------------------------------------
        */

        $this->crud->setFromDb();

        // ------ CRUD FIELDS

        // $this->crud->addField([
        //     'label' => 'Expert Panels',
        //     'type' => 'expert_panel_field',
        //     'name' => 'expertPanels',
        //     'entity' => 'expertPanels',
        //     'attribute' => 'name',
        //     'model' => ExpertPanel::class,
        //     'pivot' => true
        // ], 'both');

        // $this->crud->addField([
        //     'label' => 'Roles',
        //     'type' => 'select2_multiple',
        //     'name' => 'roles',
        //     'entity' => 'roles',
        //     'attribute' => 'name',
        //     'model' => Role::class,
        //     'pivot' => true
        // ], 'both');

        // $this->crud->removeField('deactivated_at');
        // $this->crud->removeField('password');

        // ------ CRUD FIELDS
        // $this->crud->addField($options, 'update/create/both');
        // $this->crud->addFields($array_of_arrays, 'update/create/both');
        // $this->crud->removeField('name', 'update/create/both');
        // $this->crud->removeFields($array_of_names, 'update/create/both');

        // ------ CRUD COLUMNS
        // $this->crud->removeColumn('deactivated_at');
        // $this->crud->addColumn([
        //     'name'=>'deactivated_at',
        //     'label' => 'Deactivated',
        //     'type' => 'datetime'
        // ]);
        
        // ------ CRUD BUTTONS
        // possible positions: 'beginning' and 'end'; defaults to 'beginning' for the 'line' stack, 'end' for the others;
        // $this->crud->addButton($stack, $name, $type, $content, $position); // add a button; possible types are: view, model_function
        $this->crud->addButtonFromView('line', 'deactivate', 'deactivate', 'end');
        // $this->crud->addButtonFromModelFunction($stack, $name, $model_function_name, $position); // add a button whose HTML is returned by a method in the CRUD model
        // $this->crud->addButtonFromView($stack, $name, $view, $position); // add a button whose HTML is in a view placed at resources\views\vendor\backpack\crud\buttons
        // $this->crud->removeButton($name);
        // $this->crud->removeButtonFromStack($name, $stack);
        // $this->crud->removeAllButtons();
        // $this->crud->removeAllButtonsFromStack('line');

        // ------ CRUD ACCESS
        $this->crud->denyAccess(['list','create','update','deactivate','delete']);
        if ($this->user->hasPermissionTo('list users')) {
            $this->crud->allowAccess(['list']);
        }
        if ($this->user->hasPermissionTo('create users')) {
            $this->crud->allowAccess(['create']);
        }
        if ($this->user->hasPermissionTo('update users')) {
            $this->crud->allowAccess(['update']);
        }
        if ($this->user->hasPermissionTo('deactivate users')) {
            $this->crud->allowAccess(['deactivate']);
        }
        if ($this->user->hasPermissionTo('delete users')) {
            $this->crud->allowAccess(['delete']);
        }

        // ------ CRUD REORDER
        // $this->crud->enableReorder('label_name', MAX_TREE_LEVEL);
        // NOTE: you also need to do allow access to the right users: $this->crud->allowAccess('reorder');

        // ------ CRUD DETAILS ROW
        // $this->crud->enableDetailsRow();
        // NOTE: you also need to do allow access to the right users: $this->crud->allowAccess('details_row');
        // NOTE: you also need to do overwrite the showDetailsRow($id) method in your EntityCrudController to show whatever you'd like in the details row OR overwrite the views/backpack/crud/details_row.blade.php

        // ------ REVISIONS
        // You also need to use \Venturecraft\Revisionable\RevisionableTrait;
        // Please check out: https://laravel-backpack.readme.io/docs/crud#revisions
        $this->crud->allowAccess('revisions');

        // ------ AJAX TABLE VIEW
        // Please note the drawbacks of this though:
        // - 1-n and n-n columns are not searchable
        // - date and datetime columns won't be sortable anymore
        // $this->crud->enableAjaxTable();

        // ------ DATATABLE EXPORT BUTTONS
        // Show export to PDF, CSV, XLS and Print buttons on the table view.
        // Does not work well with AJAX datatables.
        // $this->crud->enableExportButtons();

        // ------ ADVANCED QUERIES
        // $this->crud->addClause('active');
        // $this->crud->addClause('type', 'car');
        // $this->crud->addClause('where', 'name', '==', 'car');
        // $this->crud->addClause('whereName', 'car');
        // $this->crud->addClause('whereHas', 'posts', function($query) {
        //     $query->activePosts();
        // });
        // $this->crud->addClause('withoutGlobalScopes');
        // $this->crud->addClause('withoutGlobalScope', VisibleScope::class);
        // $this->crud->with(['expert']); // eager load relationships
        // $this->crud->orderBy();
        // $this->crud->groupBy();
        // $this->crud->limit();
    }

    public function store(StoreRequest $request)
    {
        // your additional operations before save here
        $redirect_location = parent::storeCrud($request);
        // your additional operations after save here
        // use $this->data['entry'] or $this->crud->entry

        $this->processExpertPanels($request);
        return $redirect_location;
    }

    public function update(UpdateRequest $request)
    {
        // do not update password if left blank
        if ($request['password'] === null) {
            unset($request['password']);
        }
        // your additional operations before save here
        $redirect_location = parent::updateCrud($request);
        // your additional operations after save here
        // use $this->data['entry'] or $this->crud->entry
        $this->processExpertPanels($request);
        return $redirect_location;
    }

    public function deactivate(Request $request)
    {
        if ($this->user->hasPermissionTo('deactivate users')) {
            $user = User::findOrFail($request->id);
            $user->update([
                'deactivated_at'=>Carbon::now()
            ]);

            return Redirect::back()->with(['msg','User '.$user->name.' deactivated successfully']);
        }

        return Redirect::back()->withErrors(['msg','Logged in user does not hae access to do deactivate users']);
    }

    public function reactivate(Request $request)
    {
        if ($this->user->hasPermissionTo('deactivate users')) {
            $user = User::findOrFail($request->id);
            $user->update([
                'deactivated_at'=>null
            ]);

            return Redirect::back()->with(['msg','User '.$user->name.' reactivated successfully']);
        }

        return Redirect::back()->withErrors(['msg','Logged in user does not hae access to do deactivate users']);
    }

    private function processExpertPanels(Request $request)
    {
        if ($request->expert_panels_json) {
            $expertPanels = [];
            foreach (json_decode($request->expert_panels_json) as $panel) {
                if (!isset($panel->id)) {
                    continue;
                }
                $expertPanels[$panel->id] = (array)$panel->pivot;
            }
            $this->crud->entry->expertPanels()->sync($expertPanels);
        }
    }
}
