google.maps.__gjsload__('overlay', function(_) {
    var ry = function(a) {
            this.g = a
        },
        Doa = function() {},
        sy = function(a) {
            a.Iq = a.Iq || new Doa;
            return a.Iq
        },
        Eoa = function(a) {
            this.Ba = new _.Ii(function() {
                var b = a.Iq;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.bp && a.onAdd) a.onAdd();
                        b.bp = !0;
                        a.draw()
                    }
                } else {
                    if (b.bp)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.bp = !1
                }
            }, 0)
        },
        Foa = function(a, b) {
            function c() {
                return _.Ji(e.Ba)
            }
            var d = sy(a),
                e = d.Sn;
            e || (e = d.Sn = new Eoa(a));
            _.mb(d.Oa || [], _.gf);
            var f = d.Wa = d.Wa || new _.ew,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Gv = d.Gv || new ry(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Af ? (_.Q(b, "Ox"), _.P(b, 148440)) : b instanceof _.ih && (_.Q(b, "Oxs"), _.P(b, 181451))
        },
        Joa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Goa(a) !== b && b && b instanceof _.Af) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Hoa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ka;
                        var e = new ty(b, d);
                        d.vb(e);
                        c.overlayLayer = e;
                        Ioa(a);
                        Joa(a)
                    })
                }
            }
        },
        Ioa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Gd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Goa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Hoa = function(a, b, c) {
            this.map = a;
            this.g =
                b;
            this.j = c;
            this.h = !1;
            _.Q(this.map, "Ox");
            _.P(this.map, 148440);
            c.pd(this)
        },
        Koa = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        ty = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.h = []
        };
    _.Ua(ry, _.O);
    ry.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Wd(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var uy = {};
    _.Ua(Eoa, _.O);
    uy.pd = function(a) {
        if (a) {
            var b = a.getMap();
            (sy(a).ov || null) !== b && (b && Foa(a, b), sy(a).ov = b)
        }
    };
    uy.Gd = function(a) {
        var b = sy(a),
            c = b.Wa;
        c && c.unbindAll();
        (c = b.Gv) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.mb(b.Oa, _.gf);
        b.Oa = null;
        b.Sn && (b.Sn.Ba.xc(), b.Sn = null);
        delete sy(a).ov
    };
    var vy = {};
    Hoa.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    ty.prototype.dispose = function() {};
    ty.prototype.Kb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.ir(this.o, this.j, function() {});
        k.Kb(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Koa(b, k), b.draw()
    };
    ty.prototype.pd = function(a) {
        this.h.push(a);
        this.g && Koa(a, this.g);
        this.j.refresh()
    };
    ty.prototype.Gd = function(a) {
        _.pb(this.h, a)
    };
    vy.pd = Joa;
    vy.Gd = Ioa;
    _.Ue("overlay", {
        Bs: function(a) {
            if (a) {
                (0, uy.Gd)(a);
                (0, vy.Gd)(a);
                var b = a.getMap();
                b && (b instanceof _.Af ? (0, vy.pd)(a) : (0, uy.pd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Lr(a, {
                Ad: function(b) {
                    _.ln(b.event.Ea)
                },
                yc: function(b) {
                    return _.qr(b)
                },
                Nh: function(b) {
                    return _.rr(b)
                },
                gd: function(b) {
                    return _.rr(b)
                },
                Ec: function(b) {
                    return _.sr(b)
                }
            }).aj(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.cf);
            a.addEventListener("contextmenu", _.cf);
            a.addEventListener("dblclick", _.cf);
            a.addEventListener("mousedown",
                _.cf);
            a.addEventListener("mousemove", _.cf);
            a.addEventListener("MSPointerDown", _.cf);
            a.addEventListener("pointerdown", _.cf);
            a.addEventListener("touchstart", _.cf);
            a.addEventListener("wheel", _.cf)
        }
    });
});