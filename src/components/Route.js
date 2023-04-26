

import CustomNavigation from '../hooks/use-navigation'

function Route({path,children}) {
    const{currentPath}=CustomNavigation();
    if(path==currentPath)
    return children
    else 
    return null;
}

export default Route