<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTopicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('topics', function (Blueprint $table) {
            $table->increments('id');
            $table->string('gene_symbol');

            $table->integer('expert_panel_id')->unsigned()->nullable();
            $table->foreign('expert_panel_id')->references('id')->on('expert_panels');

            $table->integer('curator_id')->unsigned()->nullable();
            $table->foreign('curator_id')->references('id')->on('users');

            $table->string('mondo_id')->nullable();

            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('topics');
    }
}
