import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue){
  const [dataStatus, setDataStatus] = useState({loading:true, error:false})
  const [item, setItem] = useState(initialValue);

    useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItems = initialValue;

          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
          }else{
            parsedItems = JSON.parse(localStorageItem);
          }

          setItem(parsedItems);
          setDataStatus({...dataStatus, loading: false});
        }catch (error){
          setDataStatus({...dataStatus, error: true});
        }
      }, 1000);
    }, [])

    const saveItem = newItem => {
      try{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);

      } catch(error){
        setDataStatus({...dataStatus, error: true});
      }
    }

    return {
      item,
      saveItem,
      dataStatus
    };

  }