async function fetchFile(fileName) {
  const response = await fetch(fileName);
	const json = await response.json();

  return json;
}

async function getUserInfo(id) {
  return await fetchFile(`./json/user${id}.json`);
}

async function getFriendsList(id) {
  const response = await fetch(`./json/friendsOf${id}.json`);
  const json = await response.json();

  return json;
}

async function getMessage(id) {
  const response = await fetch(`./json/message${id}.json`);
  const json = await response.json();

  return json;
}

async function myFetch(id) {
  const userInfo = await getUserInfo(id);
  console.log(`--${userInfo.name}'s timeline--`);
  const friendsList = await getFriendsList(userInfo.id);
  friendsList.friendIds.forEach(async function(friendId) {
    const friendInfo = await getUserInfo(friendId);
    const latestMsg = await getMessage(friendInfo.latestMsgId);
    console.log(`${friendInfo.name} says: ${latestMsg.message}`);
  });
}

myFetch(1);
