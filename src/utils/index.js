
import toast from "react-hot-toast";

// card
const getAllCard = () => {
  const all = localStorage.getItem("card");
  if (all) {
    const cards = JSON.parse(all);
    return cards;
  } else {
    return [];
  }
};

const addCard = (gadget) => {
  const addToCard = getAllCard();
  const isExist = addToCard.find((item) => item.id === gadget.id);

  if (!isExist) {
    const updatedCard = [...addToCard, gadget];
    localStorage.setItem("card", JSON.stringify(updatedCard));

    window.dispatchEvent(new Event("storageChange"));
    toast.success('Item added to cart !')
  } else {
    toast.error("Item already added in cart!");
  }
};

// wish list
const getWishList = () => {
  const all = localStorage.getItem("wishList");
  if (all) {
    const cards = JSON.parse(all);
    return cards;
  } else {
    return [];
  }
};

const addWhistList = (gadget, setWishCount) => {
  const addToWishList = getWishList();
  const isExist = addToWishList.find((item) => item.id === gadget.id);

  if (!isExist) {
    const updatedWishList = [...addToWishList, gadget];
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));

    window.dispatchEvent(new Event("storageChange"));
    
    // Immediately update the wishlist count
    if (setWishCount) {
      setWishCount(updatedWishList.length);
    }

    toast.success("Item added to wishlist!");
  } else {
    toast.error("Item already added in wishlist!");
  }
};

export { addCard, getAllCard, getWishList, addWhistList };
