module.exports = {

    infos: {
        public: true,
        language_code: "en",
        language_name: "English",
        language_flag: "🇬🇧"
    },

    general: {
        error_no_stats_title: "Not enough data...",
        error_no_stats_content: "Before displaying and generating projections, I need to **fetch** enough data...\n> Estimated time remaining:",
        error_no_stats_image: "https://i.imgur.com/qtkhzMX.png", // Images will be translated later.
        cooldown_long_title: "You're in cooldown...",
        cooldown_long_content: "**Enabling the ServerPremium** will allow all members to use this command without any limit !\n\n*The use of artificial intelligence consumes a lot of resources, support our project by enabling the premium !",
        cooldown_long_timer_name: "Time Remaining",
        cooldown_long_timer_content: "You can use the command again in",
        cooldown_long_shop_name: "Shop",
        cooldown_long_shop_content: "[` Our shop `](https://discordanalytics.fr/client/user?action=shop) *instructions below!*\n[` Join our Server `](${clientConnection.config.support.invite}) *giveaways and bonuses!*",
        cooldown_long_image: "https://i.imgur.com/pJFcBi8.png",

        months_list: {
            "1": "January",
            "2": "February",
            "3": "March",
            "4": "April",
            "5": "May",
            "6": "June",
            "7": "July",
            "8": "August",
            "9": "September",
            "10": "October",
            "11": "November",
            "12": "December",
        }
    },

    help: {
        help_embed_title: "Server Analytics help page",
        help_embed_field1_name: "Server statistics",
        help_embed_field1_content: "`${prfx}stats` - Server detailed statistics\n> `${prfx}top` - Server members leaderboards\n> `${prfx}graph` - Generate a graphic\n> `${prfx}forecast` - Forecasts\n> `${prfx}trends` - Server activity trends",
        help_embed_field2_name: "Personal statistics",
        help_embed_field2_content: "`${prfx}me` - Display your statistics on this server\n> `${prfx}u [@member]` - Display the statistics of a member",
        help_embed_field3_name: "Other commands",
        help_embed_field3_content: "`${prfx}counter` - Create and manage counter channels\n> `${prfx}invite` - Invite the bot on your server\n> `${prfx}set` - Modify Server Analytics configuration",
        help_embed_field4_name: "Liens importants",
        help_embed_field4_content: "[`Website`](https://discordanalytics.fr) • [`Our Server`](https://discord.gg/g62eVMr) • [`Invite the bot`](https://cutt.ly/regmeY2)",
        help_embed_field4_premium_since: "ServerPremium for",
        help_embed_field4_get_premium: "**» Not yet premium?** *Type s.premium*",
        help_embed_author: "Asked by"
    },

    enable: {
        enable_error_access: "Whoops!** Command access is reserved for Administrators and Managers of Server Analytics.",
        enable_error_not_exist: "The specified activation key does not exist or has already been claimed...",
        enable_error_expired: "The specified activation key has expired and can no longer be used...",
        enable_error_already_claimed: "This server has already activated this command! Use your activation key on another server.",
        enable_error_command_not_exist: "It looks like this command no longer exists or is now public...",
        enable_list_error_no_key: "No activation key has been activated on this server...",
        enable_list_embed_description: "List of commands activated by activation key on this server",
        enable_list_embed_title: "Activated commands on this server",
        enable_list_embed_activated_cmds: "Activated commands:",
        enable_list_embed_activated_cmds_content: "This server has **${x}** activated commands:",
        enable_list_embed_privileges: "Activated privileges:",
        enable_list_embed_privileges_count: "This server has **${x}** activated privileges:",
        enable_list_embed_privileges_empty: "*No activated privileges on this server*",
        enable_premium_success: "**» All set!** You have activated the **ServerPremium** on this server until",
        enable_premium_success_msg: "*All the advantages should be activated in less than **240s***",
        enable_premium_success_alt: "**» All set!** You have extended your **ServerPremium** subscription until",
        enable_privilege_update: "**» All set!** Server Privileges have been updated!",
    },

    forecast: {
        loading_message_prefix: "Loading",
        loading_message_ai: "Initialising the **IA** model and training.",
        loading_messages_maths: "Calculating and generating forecasts...",
        graph_name_ai_process: "Predictive analysis by Artificial Intelligence",
        graph_name_maths_process: "Predictive analysis by using mathematical process",
        forecast_help_title: "Statistic forecast of",
        forecast_help_description: "**Project yourself into the future** using our Artificial Intelligence and statistical analysis.",
        forecast_help_cmd_members_maths: "Member growth forecast",
        forecast_help_cmd_members_ai: "**Artificial Intelligence**\n> *Predictive analysis by IA of member growth on this server.*\n> ⚠ Slow and not precise: not recommended",
        forecast_help_footer_name: "🧪 • Experimental Command"
    },

    set: {
        set_lang_list_title: "Modifier la langue du bot",
        set_lang_list_description: "Modifiez la langue du bot en tapant `${prfx}set lang [langue]`, par exemple `${prfx}set lang en` pour définir la langue du serveur en Anglais.",
        set_lang_error_wrong_countrycode: "La langue entrée n'existe pas ou n'est pas encore disponnible ! Entrées possibles:",
        set_lang_update_embed_title: "Langue du bot modifiée !",
        set_lang_update_embed_content: "Les commandes seront désormais affichées en"
    }

}