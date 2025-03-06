import Svg, { Path } from "react-native-svg";

export const Quit = ({color="#9B9595", size="50"})=>(
    <Svg width={size} height={size} viewBox={`0 0 50 50`} fill="none" >
    <Path fillRule="evenodd" clipRule="evenodd" d="M8.66527 11.3298C9.15876 10.8364 9.82799 10.5593 10.5258 10.5593C11.2236 10.5593 11.8928 10.8364 12.3863 11.3298L23.6837 22.6271L34.9811 11.3298C35.2238 11.0784 35.5142 10.8779 35.8353 10.74C36.1563 10.6021 36.5016 10.5295 36.8511 10.5265C37.2005 10.5234 37.547 10.59 37.8704 10.7223C38.1938 10.8546 38.4876 11.0501 38.7347 11.2971C38.9818 11.5442 39.1772 11.838 39.3095 12.1615C39.4419 12.4849 39.5084 12.8314 39.5054 13.1808C39.5024 13.5302 39.4298 13.8755 39.2918 14.1966C39.1539 14.5177 38.9534 14.8081 38.7021 15.0508L27.4047 26.3482L38.7021 37.6455C39.1815 38.1419 39.4467 38.8066 39.4407 39.4966C39.4347 40.1866 39.158 40.8466 38.6701 41.3345C38.1821 41.8225 37.5221 42.0992 36.8321 42.1052C36.1421 42.1112 35.4774 41.846 34.9811 41.3666L23.6837 30.0692L12.3863 41.3666C11.89 41.846 11.2253 42.1112 10.5353 42.1052C9.84527 42.0992 9.18524 41.8225 8.69732 41.3345C8.20941 40.8466 7.93265 40.1866 7.92665 39.4966C7.92065 38.8066 8.1859 38.1419 8.66527 37.6455L19.9626 26.3482L8.66527 15.0508C8.17192 14.5573 7.89478 13.8881 7.89478 13.1903C7.89478 12.4925 8.17192 11.8233 8.66527 11.3298Z" fill={color}/>
    </Svg>
) 

export const Reply = ({color="#4D8179", size="34"})=>(
    <Svg width={size} height={size} viewBox="0 0 34 34" fill="none">
    <Path d="M3 3.00326V11.6679H4.00869M4.00869 11.6679C5.15923 8.82268 7.22138 6.43951 9.87195 4.89192C12.5225 3.34432 15.6117 2.71977 18.6554 3.11614C21.6991 3.51251 24.5252 4.9074 26.6909 7.0822C28.8566 9.25701 30.2395 12.0888 30.6228 15.1338M4.00869 11.6679H11.6657M30.7302 30.7302V22.0656H29.7233M29.7233 22.0656C28.5711 24.9091 26.5084 27.2904 23.858 28.8366C21.2077 30.3828 18.1195 31.0067 15.0767 30.6104C12.0339 30.2142 9.20845 28.8203 7.04261 26.647C4.87676 24.4736 3.49283 21.6435 3.10745 18.5997M29.7233 22.0656H22.0645" stroke={color} strokeWidth="5.04186" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
) 
export const Sound = ({color="#4D8179", size="34"})=>(
    <Svg width={size} height={size} viewBox="0 0 33 36" fill="none" >
        <Path fillRule="evenodd" clipRule="evenodd" d="M32.8639 2.48812C32.8637 2.11853 32.7743 1.75513 32.6043 1.43239C32.4342 1.10965 32.1891 0.83828 31.8922 0.644025C31.5953 0.449771 31.2564 0.339077 30.9078 0.322448C30.5591 0.30582 30.2123 0.383807 29.9001 0.54901L13.9441 8.99518H6.23656C4.60687 8.99518 3.04393 9.68075 1.89156 10.9011C0.73919 12.1214 0.0917969 13.7765 0.0917969 15.5023C0.0917969 17.228 0.73919 18.8831 1.89156 20.1034C3.04393 21.3238 4.60687 22.0093 6.23656 22.0093H6.81008L10.4375 33.5398C10.5734 33.9719 10.8343 34.3478 11.1832 34.614C11.5321 34.8803 11.9513 35.0236 12.3813 35.0235H14.4296C14.9728 35.0235 15.4938 34.7949 15.8779 34.3882C16.262 33.9814 16.4778 33.4297 16.4778 32.8544V23.3498L29.9001 30.4555C30.2123 30.6207 30.5591 30.6987 30.9078 30.6821C31.2564 30.6654 31.5953 30.5547 31.8922 30.3605C32.1891 30.1662 32.4342 29.8949 32.6043 29.5721C32.7743 29.2494 32.8637 28.886 32.8639 28.5164V2.48812Z" fill={color}/>
    </Svg>
)

export const Eye = ({color="#4D8179", size="34"})=>(
    <Svg width={size} height={size} viewBox="0 0 46 46" fill="none" >
        
        <Path d="M28.3442 22.6721C28.3442 24.1764 27.7466 25.6191 26.6829 26.6829C25.6191 27.7466 24.1764 28.3442 22.6721 28.3442C21.1678 28.3442 19.725 27.7466 18.6613 26.6829C17.5976 25.6191 17 24.1764 17 22.6721C17 21.1678 17.5976 19.725 18.6613 18.6613C19.725 17.5976 21.1678 17 22.6721 17C24.1764 17 25.6191 17.5976 26.6829 18.6613C27.7466 19.725 28.3442 21.1678 28.3442 22.6721Z" stroke={color} strokeWidth="5.04186" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M4.64648 22.6885C7.10774 15.0179 14.4316 9.45361 23.0808 9.45361C31.7319 9.45361 39.0538 15.0179 41.5151 22.6885C39.0538 30.3591 31.7319 35.9234 23.0808 35.9234C14.4316 35.9234 7.10774 30.3591 4.64648 22.6885Z" stroke={color} strokeWidth="5.04186" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>

)