import SignUp from '@/components/authPages/SignUp';

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ mode?: string }> }) {
    const params = await searchParams;
    const initialMode = params?.mode === 'login' ? 'login' : 'signup';
    return <SignUp initialMode={initialMode} />;
}
