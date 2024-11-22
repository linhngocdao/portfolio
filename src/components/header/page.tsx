import React from 'react';
import { Home } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className="flex justify-center w-full fixed top-2 left-0  right-0">
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[70%] md:w-[30%] pt-5 md:static md:translate-x-0">
                <nav className="bg-gray-200/90 backdrop-blur-sm rounded-full">
                    <ul className="flex justify-around items-center py-2 px-4">
                        {[0, 1, 2, 3].map((index) => (
                            <li key={index}>
                                <Link
                                    href="#"
                                    className="flex flex-col items-center group"
                                >
                                    <div className={`p-1.5 rounded-full transition-colors ${index === 0 ? 'bg-gray-300/80' : ''
                                        } ${index === 1 ? 'text-blue-500' : 'text-gray-700'
                                        }`}>
                                        <Home size={16} />
                                    </div>
                                    <span className="text-[10px] mt-0.5 text-gray-600 hidden md:block">
                                        trang chu
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
