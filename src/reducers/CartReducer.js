export function CartReducer(state, action) {
  switch (action.type) {
    case "AddToCarts": {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);
      state.carts.push({ ...product, quantity: 1 });
      product.quantity -= 1;
      break;
    }

    case "RemoveFromCart": {
      const id = action.payload;
      const indexInProducts = state.products.findIndex(
        (item) => item.id === id
      );
      state.products[indexInProducts].quantity =
        state.products[indexInProducts].totalQuantity;
      const indexInCarts = state.carts.findIndex((item) => item.id === id);
      state.carts.splice(indexInCarts, 1);
      break;
    }

    case "AddSingleItemInCart": {
      const id = action.payload;
      const indexInProducts = state.products.findIndex(
        (item) => item.id === id
      );
      const indexInCarts = state.carts.findIndex((item) => item.id === id);
      if (state.products[indexInProducts].quantity !== 0) {
        state.products[indexInProducts].quantity -= 1;
        state.carts[indexInCarts].quantity += 1;
      }
      break;
    }

    case "RemoveSingleItemFromCart": {
      const id = action.payload;
      const indexInProducts = state.products.findIndex(
        (item) => item.id === id
      );
      const indexInCarts = state.carts.findIndex((item) => item.id === id);
      if (state.carts[indexInCarts].quantity !== 1) {
        state.products[indexInProducts].quantity += 1;
        state.carts[indexInCarts].quantity -= 1;
      }
      break;
    }

    case "Sort": {
      state.products = SortedData(state.products, action.payload);
      break;
    }

    case "Searchbar": {
      state.searchText = action.payload;
      break;
    }

    default:
      return new Error("Error in carts Reducer");
  }
}

function SortedData(data, sortStyle) {
  const products = [...data];

  switch (sortStyle) {
    case "Most Popular": {
      return products.sort(
        (a, b) => Number(b.numberOfStars) - Number(a.numberOfStars)
      );
    }
    case "Newest": {
      return products.sort((a, b) => Number(a.id) - Number(b.id));
    }
    case "Price: Low to High": {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    case "Price: High to Low": {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    default:
      return new Error("Error in carts Reducer");
  }
}
