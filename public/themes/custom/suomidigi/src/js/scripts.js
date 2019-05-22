(function($, Drupal) {
  Drupal.behaviors.mmenu = {
    attach(context) {
      $(".menu--main", context).mmenu({
        offCanvas: true,
        extensions: ["position-right", "border-none"]
      });
    }
  };
})(jQuery, Drupal);
