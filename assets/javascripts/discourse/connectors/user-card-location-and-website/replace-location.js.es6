import { scheduleOnce } from "@ember/runloop";

export default {
  setupComponent(args, component) {
    const enabled = Discourse.SiteSettings.location_users_map;
    if (enabled) {
      scheduleOnce('afterRender', () => {
        $(component.element).parents('.location-and-website')
          .addClass('map-location-enabled');
      });

      component.set('showUserLocation', !!args.user.custom_fields.geo_location);
      component.set('linkWebsite', !args.user.isBasic);
    }
  }
};
