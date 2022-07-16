import { MemoryRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

const Router = ({ children }) => {
  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
};

export default Router;

Router.propTypes = {
  children: PropTypes.node,
};
