import Link from "next/link";

export const MenuButtons = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full grid-cols-3 gap-0">
                <Link
                    href={'/agendar'}
                    type="button"
                    className="flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <svg
                        className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Agendar</span>
                </Link>
                <Link
                    href={'/agendamentos'}
                    type="button"
                    className="flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <svg
                        className="w-7 h-7 mb-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        fill="white"
                    >
                        <path d="M68.75 43.75c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676s2.6328 12.988 7.3242 17.676c4.6875 4.6914 11.047 7.3242 17.676 7.3242s12.988-2.6328 17.676-7.3242c4.6914-4.6875 7.3242-11.047 7.3242-17.676s-2.6328-12.988-7.3242-17.676c-4.6875-4.6914-11.047-7.3242-17.676-7.3242zm8.4688 33.469c-0.58594 0.58984-1.3867 0.92578-2.2188 0.92578s-1.6328-0.33594-2.2188-0.92578l-5.3125-5.3438c-1.1719-1.168-1.8359-2.75-1.8438-4.4062v-8.0938c0-1.7266 1.3984-3.125 3.125-3.125s3.125 1.3984 3.125 3.125v8.0938l5.3438 5.3125c0.58984 0.58594 0.92578 1.3867 0.92578 2.2188s-0.33594 1.6328-0.92578 2.2188zm-52.219-64.719h-6.25v-3.125c0-1.7266 1.3984-3.125 3.125-3.125s3.125 1.3984 3.125 3.125zm50 0h-6.25v-3.125c0-1.7266 1.3984-3.125 3.125-3.125s3.125 1.3984 3.125 3.125zm-62.5 15.625h-6.25v-6.25c0-5.1758 4.1992-9.375 9.375-9.375h3.125v6.25c0 1.7266 1.3984 3.125 3.125 3.125s3.125-1.3984 3.125-3.125v-6.25h43.75v6.25c0 1.7266 1.3984 3.125 3.125 3.125s3.125-1.3984 3.125-3.125v-6.25h3.125c5.1758 0 9.375 4.1992 9.375 9.375v6.25zm25 40.625c-0.011719 6.7656 2.1797 13.348 6.25 18.75h-28.125c-5.1758 0-9.375-4.1992-9.375-9.375v-43.75h81.25v9.375c-6.2227-4.668-13.961-6.8438-21.703-6.1094s-14.93 4.3281-20.164 10.082c-5.2344 5.7539-8.1328 13.25-8.1328 21.027z" />
                    </svg>


                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Agendamentos</span>
                </Link>
                <Link
                    href={'/conta'}
                    type="button"
                    className="flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <svg
                        className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Conta</span>
                </Link>
            </div>
        </div >
    )
}