<?php

namespace Deployer;

use Symfony\Component\Console\Input\InputOption;

require 'recipe/laravel.php';

// Project name
set('application', 'clingen');

// Project repository
set('repository', 'git@bitbucket.org:shepsweb/clingen.git');

// [Optional] Allocate tty for git clone. Default value is false.
// set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', ['.env']);
add('shared_dirs', ['storage']);

// Writable dirs by web server
add('writable_dirs', []);

// Hosts
host('test')
    ->hostname('web3demo.schsr.unc.edu')
    ->stage('test')
    ->set('branch', 'demo')
    ->set('deploy_path', '/mnt/web/project/{{application}}-test')
    ->roles(['test', 'internal', 'stage']);

host('demo')
    ->hostname('web3demo.schsr.unc.edu')
    ->stage('demo')
    ->set('branch', 'demo')
    ->set('deploy_path', '/mnt/web/project/{{application}}')
    ->roles(['demo', 'client', 'stage']);

host('prod')
    ->hostname('web3.schsr.unc.edu')
    ->stage('production')
    ->set('branch', 'master')
    ->set('deploy_path', '/mnt/web/project/{{application}}')
    ->roles(['production', 'client', 'stage']);

option('with-build', null, InputOption::VALUE_OPTIONAL, 'Build before deploy (optional)');

// Tasks
desc('Build for deploy, merge, and push');
task('build', function () {
    runLocally('npm run prod');
    write('Committing build js and css assets');
    runLocally('git ci -am "build js and css for deploy"');
    write('pushing changes');
    runLocally('git push');
})->local();

task('build-deploy', [
    'build',
    'deploy'
]);

task('artisan:optimize', function () {
});

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');
