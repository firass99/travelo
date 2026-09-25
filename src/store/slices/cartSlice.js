const initialState = {
  cart: [],
  totalPrice: 0,
};

const recalcTotal = (state) => {
  state.totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.qte,
    0,
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const destId = action.payload.id;
      const existing = state.cart.find((item) => item.id === destId);

      if (existing) {
        existing.qte += 1;
      } else {
        const newDestination = DESTINATIONS.find((dest) => dest.id === destId);
        if (newDestination) {
          state.cart.push({ ...newDestination, qte: 1 });
        }
      }
      recalcTotal(state);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      recalcTotal(state);
    },

    updateQuantity: (state, action) => {
      const { id, qte } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.qte = Math.max(1, qte);
      }
      recalcTotal(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
