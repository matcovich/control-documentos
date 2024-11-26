
export default function WebLayout({ children }: { children: React.ReactNode;}) {
    return (
        <main className="bg-gray-500">
            {children}
        </main>
    );
}