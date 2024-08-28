function getAcceleration(n) {
    if (n.f !== undefined && n.m !== undefined) {
        return n.f / n.m;
    } else if (n.Δv !== undefined && n.Δt != undefined) {
        return n.Δv / n.Δt;
    }else if (n.d !== undefined && n.t !== undefined) {
        return (d * 2) / (t * t);
    }else {
        return "impossible";
    }
 }