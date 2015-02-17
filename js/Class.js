/**
 * CLASS_NAME Class.
 *
 * @constructor
 */
var CLASS_NAME = function() {

    var $this = this;

    /**
     * Public method to hook into the class.
     */
    $this.init = function() {
        events();
    };

    /**
     * Bind events to the $(document).
     */
    var events = function() {
        //
    };

};

// Instantiate the class
(new CLASS_NAME()).init();