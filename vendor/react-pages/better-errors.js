class BetterErrors {

  undefinedCompnent = ({ component_name }) => {
    throw new Error(`The component (${component_name}) has not been successfully registered, maybe you forgot to export it by default, see your refister file or your webpack context folder`)
  }

}

const betterErrors = new BetterErrors()
export default betterErrors
