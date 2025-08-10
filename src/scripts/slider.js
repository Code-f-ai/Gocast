import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'slick-carousel'; // import script
import 'slick-carousel/slick/slick.css'; // import CSS
import 'slick-carousel/slick/slick-theme.css'; // nếu muốn thêm giao diện có sẵn

export function initSlider(selecter = '.trending-slider') {
  $(selecter).slick({
    arrows: true,
    dots: true, 
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
}