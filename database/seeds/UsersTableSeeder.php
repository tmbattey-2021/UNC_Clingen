<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Sirs Programmer',
            'email' => 'sirs@unc.edu',
            'password' => \Hash::make('tester')
        ]);
        $user->assignRole('programmer');

        $user = User::create([
            'name' => 'TJ Ward',
            'email' => 'jward3@email.unc.edu',
            'password' => \Hash::make('tester')
        ]);
        $user->assignRole('programmer');

        $user = User::create([
            'name' => 'Maria Tobin',
            'email' => 'maria.tobin@unc.edu',
            'password' => \Hash::make('tester')
        ]);
        $user->assignRole('programmer');

        $user = User::create([
            'name' => 'Jenny Goldstein',
            'email' => 'goldjen@email.unc.edu',
            'password' => \Hash::make('tester')
        ]);
        $user->assignRole('admin');

        $user = User::create([
            'name' => 'Courtney Lynn Thaxton',
            'email' => 'courtney_thaxton@med.unc.edu',
            'password' => \Hash::make('tester')
        ]);
        $user->assignRole('admin');
        $user->assignRole('curator');

        if (!env('production')) {
            $user = User::create([
                'name' => 'James A Curator',
                'email' => 'james-curatorn@med.unc.edu',
                'password' => \Hash::make('tester')
            ]);
            $user->assignRole('curator');
        }
    }
}
