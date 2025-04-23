import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/slice';
import { USER_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((store) => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        bio: user?.profile?.bio || '',
        skills: user?.profile?.skills?.join(', ') || '',
        file: null,
    });

    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!input.fullname || !input.email) {
            toast.error("Please fill out all required fields.");
            return;
        }
        const formData = new FormData();
        Object.entries(input).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });
        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                setInput({
                    fullname: '',
                    email: '',
                    phoneNumber: '',
                    bio: '',
                    skills: '',
                    file: null,
                });
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred.");
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                    <DialogDescription>Update your profile details here.</DialogDescription>
                </DialogHeader>
                <form onSubmit={submitHandler}>
                    <div className="grid gap-4 py-4">
                        {['fullname', 'email', 'phoneNumber', 'bio', 'skills'].map((field) => (
                            <div key={field} className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor={field} className="text-right text-white">
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </Label>
                                <Input
                                    id={field}
                                    name={field}
                                    value={input[field]}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>
                        ))}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="file" className="text-right text-white">
                                Resume
                            </Label>
                            <Input
                                id="file"
                                name="file"
                                type="file"
                                accept="application/pdf"
                                onChange={fileChangeHandler}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        {loading ? (
                            <Button className="w-full my-4 text-white">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full my-4 text-white bg-black">
                                Update
                            </Button>
                        )}
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProfileDialog;
