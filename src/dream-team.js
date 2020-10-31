module.exports = function createDreamTeam(members) {
  let dreamTeam = '';
  let removedSpaces = [];
  let sortedmembers = [];
  let sanitized = [];
  if (!Array.isArray(members)) {
    return false;
  } else {


    for (i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        sanitized.push(members[i].toUpperCase());
      }
    }

    for (i = 0; i < sanitized.length; i++) {
      removedSpaces.push(sanitized[i].replace(/\s/g, ''));
    }

    sortedmembers = removedSpaces.sort();
    for (i = 0; i < sortedmembers.length; i++) {
      dreamTeam += sortedmembers[i].charAt(0);
    }
    console.log(dreamTeam);
    return dreamTeam;
  }
};