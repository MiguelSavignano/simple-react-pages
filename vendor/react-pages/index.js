import React from 'react'
import ReactDOM from 'react-dom'
import BetterErrors from './better-errors'

const deleteFileExtension = (file_name = "") => file_name.substr(0, file_name.lastIndexOf('.')) || file_name

class ReactPages {
  constructor() {
    this.components = {}
  }

  register = (component_name, component_function) => {
    if (typeof component_function !== 'function') {
      return BetterErrors.undefinedCompnent({ component_name, component_function })
    }
    this.components[component_name] = component_function
  }

  registerWithWebpackContext = (requireContext) => {
    this.getAllModulesByFile(requireContext).forEach((fileModuleWebpack) => {
      const { file_name, value } = fileModuleWebpack
      this.register(file_name, value.default)
    })
  }

  getAllModulesByFile = (requireContext) => {
    const files_paths = requireContext.keys();
    return files_paths.map((file_path) => {
      const id = requireContext.resolve(file_path)
      const file_name = deleteFileExtension(file_path.replace("./", ""))
      return ({
        file_path,
        file_name,
        value: __webpack_require__(id),
      })
    })
  }

  render = (component_name, props = {}, dom_id = "react-page") => {
    const Component = this.components[component_name]
    if (typeof Component !== 'function') {
      return BetterErrors.undefinedCompnent({ component_name, Component })
    }
    try {
      ReactDOM.render(<Component {...props} />, document.getElementById(dom_id))
    } catch (exeption) {
      alert(exeption.message)
      throw exeption
    }
  }

  renderByUrl = (props = {}, dom_id = "react-page") => {
    const component_name = deleteFileExtension(window.location.pathname.replace("/", ""))
    const Component = this.components[component_name]
    if (typeof Component !== 'function') {
      return BetterErrors.undefinedCompnent({ component_name, Component })
    }
    try {
      ReactDOM.render(<Component {...props} />, document.getElementById(dom_id))
    } catch (exeption) {
      alert(exeption.message)
      throw exeption
    }
  }

  start = () => {
    document.addEventListener("DOMContentLoaded", (event) => {
      const domContainer = document.getElementById("react-page-root")
      if (!domContainer) return false
      const props = Object.assign({}, domContainer.dataset) || {}
      this.renderByUrl(props, "react-page-root")
    })
  }

}

const reactPages = new ReactPages()

global.ReactPages = reactPages
export default reactPages
