export const useInitialPage = () => {
    window.addEventListener('scroll', function () { })
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}