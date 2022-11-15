function Node(position, path) {
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
    return null;
  }

  return { position, path };
}

function isValid(position, path) {
  if (
    position[0] >= 0 && position[0] <= 7 && position[1] >= 0 && position[1] <= 7
    && path[0] >= 0 && path[0] <= 7 && path[1] >= 0 && path[1] <= 7
  ) {
    return true;
  }

  return false;
}

function knightMoves(start, end) {
  if (!isValid(start, end)) throw 'Enter numbers within 0-7';

  // queue has starting position & complete path
  let queue = [Node([start[0], start[1]], [[start[0], start[1]]])];
  let currentNode = queue.shift();

  while (currentNode.position[0] !== end[0] || currentNode.position[1] !== end[1]) {
    let possibleMoves = [
      [currentNode.position[0] + 2, currentNode.position[1] - 1],
      [currentNode.position[0] + 2, currentNode.position[1] + 1],
      [currentNode.position[0] - 2, currentNode.position[1] - 1],
      [currentNode.position[0] - 2, currentNode.position[1] + 1],
      [currentNode.position[0] + 1, currentNode.position[1] - 2],
      [currentNode.position[0] + 1, currentNode.position[1] + 2],
      [currentNode.position[0] - 1, currentNode.position[1] - 2],
      [currentNode.position[0] - 1, currentNode.position[1] + 2],
    ];

    possibleMoves.forEach((move) => {
      let node = Node(move, currentNode.path.concat([move]));
      if (node !== null) {
        queue.push(node);
      }
    });

    currentNode = queue.shift();
  }

  console.log(`=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`);
  currentNode.path.forEach((position) => console.log(position));
}

//           FROM     TO
knightMoves([3, 3], [3, 4]);
knightMoves([3, 2], [3, 4]);
