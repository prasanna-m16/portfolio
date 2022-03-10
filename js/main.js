! function(r) {
    "use strict";
    var s;
    setTimeout(function() {
        0 < r(".preloader").length && r(".preloader").removeClass("show")
    }, 1e3), (s = r(window)).on("scroll", function() {
        var e = s.scrollTop(),
            t = r(".navbar"),
            o = r(".navbar .logo> img");
        300 < e ? (t.addClass("nav-scroll"), o.attr("src", "img/logo-dark.png")) : (t.removeClass("nav-scroll"), o.attr("src", "img/logo-light.png"))
    }), r("nav ul li a, .hero-btn .btn").click(function(e) {
        e.preventDefault(), r("body,html").animate({
            scrollTop: r(this.hash).offset().top - 80
        }, 500)
    }), r("[data-background]").each(function() {
        r(this).css("background-image", "url(" + r(this).attr("data-background") + ")")
    }), r(".parallaxie").parallaxie({
        speed: .2,
        size: "cover"
    }), r(".popup-video").magnificPopup({
        type: "iframe"
    }), r(".popup-img").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), (s = r(window)).on("scroll", function() {
        r(".skill-progress .progres").each(function() {
            var e = r(this).offset().top + r(this).outerHeight(),
                t = r(window).scrollTop() + r(window).height(),
                o = r(this).attr("data-value");
            e < t && r(this).css({
                width: o
            })
        })
    }), r(".single-counter h3 span").counterUp({
        delay: 10,
        time: 1e3
    }), r(".filter span:first-child").addClass("active");
    var t = r(".gallery").imagesLoaded(function() {
        t.isotope({
            itemSelector: ".grid-item",
            percentPosition: !0,
            masonry: {
                columnWidth: ".grid-item"
            }
        }), r(".filter").on("click", "span", function() {
            var e = r(this).attr("data-filter");
            t.isotope({
                filter: e
            }), r(this).addClass("active").siblings().removeClass("active")
        })
    });
    r(".testimonials-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        autoplay: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    }), r(function() {
        var o = r(".contact-form form"),
            s = r(".form-messages");
        r(o).submit(function(e) {
            e.preventDefault();
            var t = r(o).serialize();
            r.ajax({
                type: "POST",
                url: r(o).attr("action"),
                data: t
            }).done(function(e) {
                r(s).removeClass("error"), r(s).addClass("success"), r(s).text(e), r("input, textarea").val("")
            }).fail(function(e) {
                r(s).removeClass("success"), r(s).addClass("error"), "" !== e.responseText ? r(s).text(e.responseText) : r(s).text("Oops! An error occured and your message could not be sent.")
            })
        })
    });
    var a = document.querySelector(".progress-wrap path"),
        i = a.getTotalLength();
    a.style.transition = a.style.WebkitTransition = "none", a.style.strokeDasharray = i + " " + i, a.style.strokeDashoffset = i, a.getBoundingClientRect(), a.style.transition = a.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var e = function() {
        var e = r(window).scrollTop(),
            t = r(document).height() - r(window).height(),
            o = i - e * i / t;
        a.style.strokeDashoffset = o
    };
    e(), r(window).scroll(e);
    jQuery(window).on("scroll", function() {
        150 < jQuery(this).scrollTop() ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress")
    }), jQuery(".progress-wrap").on("click", function(e) {
        return e.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, 550), !1
    })
}(jQuery)