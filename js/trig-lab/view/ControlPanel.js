/**
 * Control Panel for Trig Lab sim
 * Created by dubson on 6/4/2015.
 */
define( function( require ) {
  'use strict';

  // modules
  var AquaRadioButton = require( 'SUN/AquaRadioButton' );
  var CheckBox = require( 'SUN/CheckBox' );
  var HSeparator = require( 'SUN/HSeparator' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  //strings
  var cosStr = require( 'string!TRIG_LAB/cos' );
  var sinStr = require( 'string!TRIG_LAB/sin' );
  var tanStr = require( 'string!TRIG_LAB/tan' );
  var labelsStr = require( 'string!TRIG_LAB/labels' );
  var gridStr = require( 'string!TRIG_LAB/grid' );
  var specialAnglesStr = require( 'string!TRIG_LAB/specialAngles' );
  var Util = require( 'TRIG_LAB/trig-lab/common/Util' );

  // constants
  var DISPLAY_FONT = new PhetFont( 20 );
  var TEXT_COLOR = Util.TEXT_COLOR;
  var PANEL_COLOR = Util.PANEL_COLOR;
  var BACKGROUND_COLOR = Util.BACKGROUND_COLOR;

  // Text nodes
  var fontInfo = { font: DISPLAY_FONT, fill: TEXT_COLOR }; //{ fontSize: 20 };
  var cosText = new Text( cosStr, fontInfo );
  var sinText = new Text( sinStr, fontInfo );
  var tanText = new Text( tanStr, fontInfo );
  var labelsText =  new Text( labelsStr, fontInfo );
  var gridText = new Text( gridStr, fontInfo );
  var specialAnglesText = new Text( specialAnglesStr, fontInfo );


  /**
   * Constructor for the control panel
   * @param {Object} properties
   * @constructor
   */
  function ControlPanel( properties  ) {

    this.properties = properties;

    //A cluster of 3 radio buttons for displaying either cos, sin or tan
    //properties.graph = 'cos'|'sin'|'tan'
    var myRadioButtonOptions = { radius: 10, fontSize: 15, deselectedColor: BACKGROUND_COLOR } ;
    var cosRadioButton = new AquaRadioButton( properties.graphProperty, cosStr, cosText, myRadioButtonOptions );
    var sinRadioButton = new AquaRadioButton( properties.graphProperty, sinStr, sinText, myRadioButtonOptions );
    var tanRadioButton = new AquaRadioButton( properties.graphProperty, tanStr, tanText, myRadioButtonOptions );

    //3 checkboxes: Labels, Grid, Special Angles
    var checkBoxOptions = { checkBoxColorBackground: BACKGROUND_COLOR };
    var labelsCheckBox = new CheckBox( labelsText, properties.labelsVisibleProperty, checkBoxOptions );
    var gridCheckBox = new CheckBox( gridText, properties.gridVisibleProperty, checkBoxOptions );
    var specialAnglesCheckBox = new CheckBox( specialAnglesText, properties.specialAnglesVisibleProperty, checkBoxOptions );

    // Adjust touch areas
    var spacing = 15;

    var content = new VBox( {
      children: [
        cosRadioButton,
        sinRadioButton,
        tanRadioButton,
        new HSeparator( 150 ), //maxControlWidth ),
        labelsCheckBox,
        gridCheckBox,
        specialAnglesCheckBox
      ],
      align: 'left',
      spacing: spacing
    } );


    Panel.call( this, content, {xMargin: 15, yMargin: 15, lineWidth: 2, fill: PANEL_COLOR} );

  } // end ControlPanel constructor

  return inherit( Panel, ControlPanel );
} );