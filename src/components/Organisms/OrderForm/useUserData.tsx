import { useAppSelector } from 'hooks';
import { useState, useEffect } from 'react';
import { useGetUserByIdQuery } from 'services/user/user';
import { selectUserId } from 'store/user/userSlice';

export type ImportedUserData = {
  firstName: string;
  lastName: string;
  email: string;
};

export const useUserData = (): ImportedUserData => {
  const userId: string | undefined = useAppSelector(selectUserId);
  const user = useGetUserByIdQuery(userId as string);
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
    });
  }, [user]);

  return formData;
};
