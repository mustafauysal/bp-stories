<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class BP_Stories {
	/**
	 * Placeholder constructor
	 */
	public function __construct() { }

	public function setup() {
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
		add_action( 'bp_before_directory_activity', array( $this, 'bp_before_directory_activity' ) );
	}


	public function wp_enqueue_scripts() {
		wp_enqueue_script( 'zuck-js', plugins_url( 'assets/zuck-js/zuck.min.js', BP_STORIES_PLUGIN_FILE ) );
		wp_enqueue_script( 'bp-stories-js', plugins_url( 'assets/js/stories.js', BP_STORIES_PLUGIN_FILE ), array(), BP_STORIES_PLUGIN_VERSION, true );
		wp_enqueue_style( 'zuck-css', plugins_url( 'assets/zuck-js/zuck.css', BP_STORIES_PLUGIN_FILE ) );
		wp_enqueue_style( 'zuck-css-snap', plugins_url( 'assets/zuck-js/skins/snapgram.css', BP_STORIES_PLUGIN_FILE ) );
	}


	public function bp_before_directory_activity() {
		echo '<div id="stories" style="text-align: right;"></div>';
	}


	/**
	 * Return an instance of the current class, create one if it doesn't exist
	 *
	 * @since  1.0
	 * @return object
	 */
	public static function factory() {
		static $instance;
		if ( ! $instance ) {
			$instance = new self();
			$instance->setup();
		}

		return $instance;
	}

}