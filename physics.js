function getAcceleration(n) {
    if (n.f !== undefined && n.m !== undefined) {
        return n.f / n.m;
    } else if (n.Δv !== undefined && n.Δt != undefined) {
        return n.Δv / n.Δt;
    }else if (n.d !== undefined && n.t !== undefined) {
        return (n.d * 2) / (n.t * n.t);
    }else {
        return "impossible";
    }
 }