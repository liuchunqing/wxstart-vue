const Sex = {
    Male: 1,  //男
    Female: 2 //女
}

const PrivateType = {           
    Open: '0',
    Private: '1',
}

const PrivateTypeMap = {
    [ PrivateType.Open ]: '公开',
    [ PrivateType.Private ]: '私有',
};

const ClientType = {           
    PC: '11',
    H5: '12',
    Android: '16',
    IOS: '17',
    Windows: '18',
    GstarCAD: '22',
    GstarCloudArch: '23',
}

const ClientTypeMap = {
    [ ClientType.PC ]: 'PC',
    [ ClientType.H5 ]: 'H5',
    [ ClientType.Android ]: 'Android',
    [ ClientType.IOS ]: 'IOS',
    [ ClientType.Windows ]: 'Windows',
    [ ClientType.GstarCAD ]: 'GstarCAD',
    [ ClientType.GstarCloudArch ]: 'GstarCloudArch',
};


const PaymentType = {           
    Ali: '2',
    WX: '3',
}

const PaymentTypeMap = {
    [ PaymentType.Ali ]: '支付宝',
    [ PaymentType.WX ]: '微信',
};

const OrderStatus = {           
    UnPay: '0',
    Payed: '1',
}
const OrderStatusMap = {
    [ OrderStatus.UnPay ]: '未支付',
    [ OrderStatus.Payed ]: '支付成功',
    [ '2' ]: '取消订单',
    [ '3' ]: '订单服务过期',
    [ '4' ]: '支付失败/异常',
    [ '5' ]: '已退款',
    [ '6' ]: '付款未确认',
    [ '7' ]: '折算到期',
};

const CurrencyType = {           
    CNY: 'CNY',
}

const CurrencyTypeMap = {
    [ CurrencyType.CNY ]: '¥',
};

const DwgArr = [ 'ocf', 'dwg', 'dxf', 'dws', 'dwt' ];

const codepageList = [
    {id: 1, name: 'ASCII'}, {id: 38, name: 'ANSI_932(日本语)'}, {id: 39, name: 'ANSI_936(简体中文)'},  
    {id: 40, name: 'ANSI_949(Korean wansung)'}, {id: 41, name: 'ANSI_950(繁体中文)'}, 
    {id: 42, name: 'ANSI_1361(Korean Johab)'}, {id: 1200, name: 'Unicode(Unicode)'} 
];

const FileType = {           
    Folder: 1,
    File: 2,
}

const FreezeStatus = {           
    UnFreeze: 0,
    Freeze: 1,
}

export { Sex, PrivateType, PrivateTypeMap, DwgArr, codepageList, ClientType, ClientTypeMap, CurrencyType, CurrencyTypeMap
    , OrderStatus, OrderStatusMap, PaymentType, PaymentTypeMap, FileType, FreezeStatus };
