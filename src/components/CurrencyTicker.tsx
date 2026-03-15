import { useState, useEffect } from 'react';

interface Currency {
    id: string;
    name: string;
    price: number;
    change: number;
    symbol: string;
}

export default function CurrencyTicker() {

    const fetchCurrencyData = async () => {
        try {
            const response = await fetch(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,the-open-network,binancecoin&vs_currencies=usd,rub&include_24hr_change=true'
            );
            const data = await response.json();
            console.log('API данные:', data);
            return data;
        } catch (error) {
            console.error('Ошибка получения данных:', error);
            return null;
        }
    };

    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await fetchCurrencyData();
            if (data && data.bitcoin && data.ethereum && data['the-open-network'] && data.binancecoin) {
                const formattedData: Currency[] = [
                    {
                        id: 'bitcoin',
                        name: 'Bitcoin',
                        price: data.bitcoin.rub,
                        change: data.bitcoin.rub_24h_change,
                        symbol: '₿'
                    },
                    {
                        id: 'ethereum',
                        name: 'Ethereum',
                        price: data.ethereum.rub,
                        change: data.ethereum.rub_24h_change,
                        symbol: 'Ξ'
                    },
                    {
                        id: 'toncoin',
                        name: 'Toncoin',
                        price: data['the-open-network'].rub,
                        change: data['the-open-network'].rub_24h_change,
                        symbol: 'TON'
                    },
                    {
                        id: 'bnb',
                        name: 'BNB',
                        price: data.binancecoin.rub,
                        change: data.binancecoin.rub_24h_change,
                        symbol: 'BNB'
                    }
                ];
                setCurrencies(formattedData);
            }
            setLoading(false);
        };

        loadData().catch(console.error);
    }, []);

    return (
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto mt-12 max-md:mt-10 max-md:px-4 max-md:overflow-x-auto max-md:hide-scrollbar">
            {loading ? (
                <div className="text-white">Загрузка курсов...</div>
            ) : (
                <div className="flex items-center justify-center gap-6 max-md:gap-3 overflow-x-auto w-full hide-scrollbar">

                    {currencies.map((currency) => (
                        <div key={currency.id} className="flex flex-col bg-white/5 rounded-lg px-4 py-3 backdrop-blur-sm flex-shrink-0">

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-lg">{currency.symbol}</span>
                                    <span className="text-white font-source-sans-pro text-sm font-medium">
                                        {currency.name}
                                    </span>
                                </div>

                                <span className={`text-xs font-semibold px-2 py-1 rounded font-source-sans-pro ${
                                    currency.change >= 0
                                        ? 'text-green-400 bg-green-400/10'
                                        : 'text-red-400 bg-red-400/10'
                                }`}>
                                    {currency.change >= 0 ? '+' : ''}{currency.change.toFixed(2)}%
                                </span>
                            </div>


                                <span className="text-gray-300 font-source-sans-pro text-xs mt-1">
                                    ₽{currency.price.toLocaleString('ru-RU')}
                                </span>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}