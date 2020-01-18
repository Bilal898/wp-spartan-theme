<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'spartans' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'f$}hkH:%_|uIwGd}@eANvJ8T#(XCw~/>7H*]?^/(=hWM*QNi.#D;*i%Uj7e>o)mY' );
define( 'SECURE_AUTH_KEY',  'Ia#*@]w,~kim+nRZ$!3YVeI*lrxjyK]O3KH;:?gD4|Wc]uJChz:/9}*8OV#JF~nd' );
define( 'LOGGED_IN_KEY',    '-Qf<(}oA~e|YoJ7K|eHH&Xr*+EoRLAWWU-,1o^v3E|@&.QAdcCRsS!>9TbO[[xNf' );
define( 'NONCE_KEY',        'DB.QX=DNy.7<GV88jdtq&6z/ClR.Q<JO2Y6MR4`9X%==Pk]^uNuqHF0y(7C]TZT[' );
define( 'AUTH_SALT',        'D[|)%T4<!mk,fF6 <GJFd5/$tj~]z5mf7k{Vyw[^!] q-oYf`0{}[pqao{)&Z1$M' );
define( 'SECURE_AUTH_SALT', 'P7+HLa#&TR2a~9. z#rA{k<t&;q,p#q2j{i><!R|Qqu4-7QzVu$sJqfr*A?[+m,1' );
define( 'LOGGED_IN_SALT',   '{Vz@kbEX{ry9#b;|+;k GO?!+6d`)c|xY}%heK(7!G|9CVe#%~E}(mo[Fp*m@!ck' );
define( 'NONCE_SALT',       'g<4w!DMKl2{I8t:[_gzzVy:4J2?yWvg2NwG;2Q,aWbA_{ nv@{kl2T^-L!gMT[Jj' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
