google.maps.__gjsload__('search_impl', function(_) {
    var Sjb = function(a) {
            _.F.call(this, a)
        },
        Ujb = function(a) {
            var b = _.uj.Ia;
            a = a.toArray();
            Tjb || (Tjb = {
                K: "sssM",
                N: ["ss"]
            });
            return b.call(_.uj, a, Tjb)
        },
        Vjb = function(a, b) {
            _.D(a.m, 3, b)
        },
        Wjb = function(a) {
            _.F.call(this, a)
        },
        Xjb = function() {
            var a = _.Lk,
                b = _.Sj;
            this.h = _.td;
            this.g = _.Ql(_.yv, a, _.lw + "/maps/api/js/LayersService.GetFeature", b)
        },
        $jb = function(a, b, c) {
            var d = _.jG(new Xjb);
            c.Gi = (0, _.Qa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.RGa(c, _.WN(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Qa)(Yjb, null, a)));
            _.mb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.M(c, f, (0, _.Qa)(Zjb, null, a, f)))
            });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        Yjb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.we(_.mo(_.J(e.m, 2, _.qo).m, 1), _.mo(_.J(e.m, 2, _.qo).m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.fm(e.m, 3, _.bO, h);
                    f.fields[k.getKey()] = k.Da()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        Zjb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        akb = function() {};
    _.B(Sjb, _.F);
    Sjb.prototype.Rb = function() {
        return _.L(this.m, 2)
    };
    var Tjb;
    _.B(Wjb, _.F);
    Wjb.prototype.getStatus = function() {
        return _.H(this.m, 1, -1)
    };
    Xjb.prototype.load = function(a, b) {
        function c(g) {
            g = new Wjb(g);
            b(g)
        }
        var d = new Sjb;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        Vjb(d, _.qd(_.sd(this.h)));
        for (var e in a.parameters) {
            var f = _.nd(d.m, 4, _.bO);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = Ujb(d);
        this.g(a, c, c);
        return a
    };
    Xjb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    akb.prototype.ky = function(a) {
        if (_.$i[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().Jf(a.g))) : a.g && _.mHa(a.g, b) && (_.mb(a.h || [], _.gf), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata"),
                    v = a.get("directionsPipeParameters");
                b = new _.tn;
                d = d.split("|");
                b.layerId = d[0];
                for (var x = 1; x < d.length; ++x) {
                    var z = _.A(d[x].split(":")),
                        y = z.next().value;
                    z = _.na(z);
                    b.parameters[y] = z.join(":")
                }
                e && (b.spotlightDescription = new _.Gt(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.zn(g));
                m && (b.travelMapRequest = new _.dv(m));
                h && (b.mapsApiLayer = new _.em(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.Qp(p));
                q && (b.overlayLayer = new _.ps(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.gu(t));
                v && (b.directionsPipeParameters =
                    new _.du(v));
                b.darkLaunch = !!k;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.j, a.set(a.get().Sd(b))) : $jb(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.Ue("search_impl", new akb);
});