import { 
  trendingUp, 
  trendingDown,
  dollarSign
} from "../assets/icons";


export const navLinks = [
    {href: '#dashboard', label: 'Dashboard'},
    {href: '#transactions', label: 'Transactions'},
    {href: '#accounts', label: 'Accounts'},
    {href: '#settings', label: 'Settings'},
]

export const stats = [
    {
      label: "Your Total Balance",
      amount: "$100,020.00",
      increase: 10.9,
      icon: dollarSign
    },
    {
      label: "Total Income",
      amount: "$150,010.00",
      increase: 8.9,
      icon: trendingUp
    },
    {
      label: "Total Expense",
      amount: "$50,010.00",
      increase: -10.9,
      icon: trendingDown
    },
  ];

export const transactionData = [
    {
      date: "2024-01-05",
      name: "Online Store",
      contact: "+1234567890",
      status: "Completed",
      source: "Credit Card",
      amount: 150,
    },
    {
      date: "2024-01-12",
      name: "Grocery Store",
      contact: "+1987654321",
      status: "Rejected",
      source: "Debit Card",
      amount: 75,
    },
    {
      date: "2024-01-20",
      name: "Utility Bill",
      contact: "+1122334455",
      status: "Pending",
      source: "Bank Transfer",
      amount: 100,
    },
    {
      date: "2024-02-03",
      name: "Restaurant",
      contact: "+1555666777",
      status: "Completed",
      source: "Cash",
      amount: 50,
    },
    {
      date: "2024-02-10",
      name: "Online Subscription",
      contact: "+1444333222",
      status: "Completed",
      source: "Credit Card",
      amount: 25,
    },
    {
      date: "2024-02-18",
      name: "Gas Station",
      contact: "+1777888999",
      status: "Completed",
      source: "Debit Card",
      amount: 40,
    },
    {
      date: "2024-03-07",
      name: "Electronics Store",
      contact: "+1987654321",
      status: "Completed",
      source: "Credit Card",
      amount: 200,
    },
    {
      date: "2024-03-15",
      name: "Online Service",
      contact: "+1122334455",
      status: "Pending",
      source: "Bank Transfer",
      amount: 120,
    },
    {
      date: "2024-03-22",
      name: "Coffee Shop",
      contact: "+1234567890",
      status: "Rejected",
      source: "Cash",
      amount: 10,
    },
    {
      date: "2024-04-01",
      name: "Grocery Store",
      contact: "+1555666777",
      status: "Completed",
      source: "Debit Card",
      amount: 90,
    },
    {
      date: "2024-04-08",
      name: "Online Shopping",
      contact: "+1444333222",
      status: "Completed",
      source: "Credit Card",
      amount: 180,
    },
    {
      date: "2024-04-15",
      name: "Car Maintenance",
      contact: "+1777888999",
      status: "Completed",
      source: "Cash",
      amount: 300,
    },
  ];

export const accountsData = [
    {
      name: "Crypto",
      account: "codewave@gmail.com",
      amount: "85,345.00",
    },
    {
      name: "Visa Debit Card",
      account: "2463********8473",
      amount: "15,345.00"
    },
    {
      name: "MasterCard",
      account: "6785********8473",
      amount: "55,345.00",
    },
    {
      name: "Paypal",
      account: "codewave@gmail.com",
      amount: "35,345.00"
    },
  ];