<?php
/**
 * Plugin Name:     Bp Stories
 * Plugin URI:      https://github.com/mustafauysal/bp-stories
 * Description:     Stories for BuddyPress
 * Author:          Mustafa Uysal
 * Author URI:      https://uysalmustafa.com/
 * Text Domain:     bp-stories
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Bp_Stories
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'BP_STORIES_PLUGIN_VERSION' ) ) {
	define( 'BP_STORIES_PLUGIN_VERSION', '0.1.0' );
}

if ( ! defined( 'BP_STORIES_PLUGIN_FILE' ) ) {
	define( 'BP_STORIES_PLUGIN_FILE', __FILE__ );
}

if ( ! defined( 'BP_STORIES_PLUGIN_DIR' ) ) {
	define( 'BP_STORIES_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}


require_once 'includes/class-bp-stories.php';

BP_Stories::factory();