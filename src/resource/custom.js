exports.runBefore = async function(){
    console.log('custom runBefore running...')
}

exports.getListBefore = async function(){
    console.log('getListBefore running...')
}

exports.goPageCheck = async function(){
    console.log('goPageCheck running...')
}

exports.goPageErrorHandle = async function(){
    return this.driver.sleep(3000)
}

exports.goPageAfter = async function(){
    console.log('goPageAfter running...')
}

exports.doExtraContent = async function(){
    console.log('doExtraContent running...')
}

exports.doExtraContentCheck = async function(){
    console.log('doExtraContentCheck running...')
}
