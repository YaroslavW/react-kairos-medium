import React from 'react';

const Map = () => {
  return (
    <section >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.2933489729155!2d25.93513320055339!3d48.29156665928368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340899f0300f3f%3A0xb52cffac34aed9c4!2z0YPQuy4g0JrQvtCx0YvQu9GP0L3RgdC60L7QuSwgMSwg0KfQtdGA0L3QvtCy0YbRiywg0KfQtdGA0L3QvtCy0LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDU4MDAw!5e0!3m2!1sru!2sus!4v1561797221459!5m2!1sru!2sus"
        width="100%"
        height="450"
        title="Location"
        allowFullScreen
      />
    </section>
  );
};

export default Map;