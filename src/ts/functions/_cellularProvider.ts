import { IGetData, IDataCellularProvider } from '../interface'
import { CELLULAR_PROVIDER_KEYS, CELLULAR_PROVIDER_DATA } from '../datas/cellular'

/**
 * Nusantara Valid: _cellularProvider.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CellularProvider class
**/
class CellularProvider implements IGetData {
    getData(index: string = ''): IDataCellularProvider | IDataCellularProvider[] {
        let providers

        if (!index) {
            providers = CELLULAR_PROVIDER_KEYS.map((key) => ({
                key,
                name: (CELLULAR_PROVIDER_DATA as any)[key].name,
            }))
        } else {
            providers = {
                key: index,
                name: (CELLULAR_PROVIDER_DATA as any)[index].name
            }
        }

        return providers
    }
}

const isp = new CellularProvider()

/**
 * Get specific cellular provider data with IDataCellularProvider object structure
 *
 * Return object data based on provided cellular provider key
 *
 * @param {string} providerKey - The provider key
 * @return {IDataCellularProvider} IDataCellularProvider object
**/
export function getDataCellularProvider(providerKey: string): IDataCellularProvider {
    return isp.getData(providerKey) as IDataCellularProvider
}

/**
 * Get all cellular provider data with IDataCellularProvider object structure
 *
 * Return all IDataCellularProvider object in Array<IDataCellularProvider>
 *
 * @return {IDataCellularProvider[]} Array of IDataCellularProvider object
**/
export function getDataCellularProviders(): IDataCellularProvider[] {
    return isp.getData() as IDataCellularProvider[]
}