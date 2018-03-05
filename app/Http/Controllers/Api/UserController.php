<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query();
        if ($request->has('role')) {
            $query->role(explode(',', $request->role));
        }

        return $query->get();
    }
}
