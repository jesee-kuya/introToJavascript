async function queryServers(serverName, q) {
    var url = '/' + serverName + '?q=' + q;
    var backupUrl = '/' + serverName + '_backup?q=' + q;
    const req1 = getJSON(url);
    const req2 = getJSON(backupUrl);
    const res = await Promise.race([req1, req2]);
    return res;
}