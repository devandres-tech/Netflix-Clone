import { useLocation, useNavigate, useParams } from 'react-router-dom'

/**
 * @description  Provides react router dom props
 * @param {*} Component React component - JSX Element
 * @returns React component with route props
 */
export const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}
