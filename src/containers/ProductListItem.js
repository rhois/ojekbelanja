import { connect } from "react-redux";
import { orderSet, orderRemove } from "../actions";
import ListItem from "../components/ListItem";

const mapStateToProps = (state, ownProps) => ({
  count: state.order[ownProps.id]
});

const ProductListItem = connect(
  mapStateToProps,
  { orderSet, orderRemove },
)(ListItem);

export default ProductListItem;
