import { Link } from '@inertiajs/inertia-react';

export default function Card({ user, links, children }) {
    return (
        <div className="rounded-lg bg-white p-8">
            <img width="200" height="200" className="rounded-full mx-auto my-4" src={user.image ? user.image : "https://placehold.jp/ff5e00/ffffff/150x150.png"} />
            <h1 className="text-2xl text-slate-800 text-center">
                {user.name}
            </h1>
            <p className="text-slate-500 mb-8 text-center">{"A weekend developer."}</p>
            <div className="text-left">
                {links?.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2 className="text-slate-500 font-bold mb-2">
                                <Link href={item.url}>{item?.title}</Link>
                            </h2>
                        </div>
                    );
                })}
            </div>
            {children}
        </div>
    );
}