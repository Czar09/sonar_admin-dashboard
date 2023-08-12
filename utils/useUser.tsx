"use client";
import { useEffect, useState, createContext, useContext } from 'react';
import {
  useUser as useSupaUser,
  useSessionContext,
  User
} from '@supabase/auth-helpers-react';

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: { [x: string]: any } | null;
  isLoading: boolean;
  order: { [x: string]: any }[] | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase
  } = useSessionContext();

  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsloadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<{ [x: string]: any } | null>(null);
  const [order, setOrder] = useState<{ [x: string]: any }[] | null>(null);

  const getUserDetails = () => supabase.from('users').select('*').single();
  const getOrders = () => supabase
    .from('wholesale_order')
    .select(`
    *,
    wholesale_products_price(
      id
    )
    `);

  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsloadingData(true);
      Promise.allSettled([getUserDetails(), getOrders()]).then(
        (results) => {
          const userDetailsPromise = results[0];
          const orderPromise = results[1]!;

          if (userDetailsPromise.status === 'fulfilled') {
            console.log("userdetails", userDetailsPromise.value.data)
            setUserDetails(userDetailsPromise.value.data);
          }

          if (orderPromise.status === 'fulfilled') {
            console.log("orderdetails", orderPromise.value.data)
            setOrder(orderPromise.value.data);
          }


          setIsloadingData(false);
        }
      );
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      setOrder(null);
    }
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    order
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};

