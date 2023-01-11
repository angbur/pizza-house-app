import { useAppSelector } from 'hooks';
import { useState, useEffect } from 'react';
import { useGetUserByIdQuery } from 'services/user';
import { selectUserId } from 'store/userSlice';

export type ImportedUserData = {
    firstName: string;
    lastName: string;
    email: string;
  };

export const useUserData = (): ImportedUserData => {
    const userId = useAppSelector(selectUserId);
    const user = useGetUserByIdQuery(userId);
    const [formData, setData] = useState<ImportedUserData>({
        firstName: '',
        lastName: '',
        email: '',
      });

      useEffect(() => {
        setData({
            firstName: user.data?.firstName ?? '',
            lastName: user.data?.lastName ?? '',
            email: user.data?.email ?? '',
        })
      }, [user]);

      return formData;
};