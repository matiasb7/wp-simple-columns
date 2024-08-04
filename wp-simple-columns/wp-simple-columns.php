<?php
/**
 * Plugin Name: Simple Columns Blocks
 *  Plugin URI: https://github.com/matiasb7/wp-simple-columns
 * Description: Simple and useful columns block.
 * Author: Matias Berger
 * Author URI: https://github.com/matiasb7
 * Version: 1.0
 *
 * @package SimpleColumns\Blocks
 */
class WP_Simple_Columns  {
    public function __construct()
    {
        add_action( 'enqueue_block_editor_assets', [$this, 'sc_load_admin_scripts'] );
        add_action( 'wp_enqueue_scripts', [$this, 'sc_load_fe_scripts'] );
    }

    function sc_load_admin_scripts(){
        wp_enqueue_script( 'simple-columns-js', plugins_url('/build/main-admin.js', __FILE__), ['wp-blocks', 'wp-element'] );

        register_block_type( 'simple-columns/columns', array(
            'editor_script' => 'simple-columns-js',
        ) );

        wp_enqueue_style( 'sc-blocks-style-css', plugins_url('/build/main-admin.css', __FILE__) );
    }

    function sc_load_fe_scripts(){
        wp_enqueue_script( 'simple-columns-js-fe', plugins_url('/build/main-fe.js', __FILE__), ['wp-blocks', 'wp-element'] );
        wp_enqueue_style( 'sc-blocks-style-css-fe', plugins_url('/build/main-fe.css', __FILE__) );
    }
}

new WP_Simple_Columns();
