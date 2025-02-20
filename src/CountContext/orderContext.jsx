import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
    const [count, setCount] = useState(0); 

    
    useEffect(() => {
        const loadCount = async () => {
            try {
                const savedCount = await AsyncStorage.getItem("orderCount");
                if (savedCount !== null) {
                    setCount(parseInt(savedCount, 10));
                }
            } catch (error) {
                console.log("Error loading count:", error);
            }
        };
        loadCount();
    }, []);

    
    const updateCount = async (newCount) => {
        try {
            await AsyncStorage.setItem("orderCount", newCount.toString());
            setCount(newCount);
        } catch (error) {
            console.log("Error saving count:", error);
        }
    };

    return (
        <OrderContext.Provider value={{ count, setCount, updateCount }}> 
            {children}
        </OrderContext.Provider>
    );
};
