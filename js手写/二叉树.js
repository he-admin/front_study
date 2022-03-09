const tree = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3,
      left: {
        val: 7
      },
      right: {
        val: 8
      }
    }
  },
  right: {
    val: 2,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  }
}

const preOrder = (root) => {
  if (!root) {
    return;
  }
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}
preOrder(tree);
