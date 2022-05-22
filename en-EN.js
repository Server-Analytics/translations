/**
 * Ce fichier à été généré pour la dernière fois le 24/02/2022 à 19:56:45 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.0 - Version du générateur
 * @language en
 * @default fr
 */

module.exports = {
    infos: {
        public: true,
        language_code: "en",
        language_name: "English",
        language_flag: "🇬🇧",
        default: false
    },
    general: {
        months_list: {
            "1": [
                "january"
            ],
            "2": [
                "february"
            ],
            "3": [
                "march"
            ],
            "4": [
                "april"
            ],
            "5": [
                "may"
            ],
            "6": [
                "june"
            ],
            "7": [
                "july"
            ],
            "8": [
                "august"
            ],
            "9": [
                "september"
            ],
            "10": [
                "october"
            ],
            "11": [
                "november"
            ],
            "12": [
                "december"
            ]
        },
        time_formats: {
            "STANDARD SLASH + YEAR": "{DAY}/{MONTH}/{YEAR}",
            "STANDARD SLASH + YEAR HH:SS": "{DAY}/{MONTH}/{YEAR} at {HOUR}h{MINUTE}",
            "STANDARD FILE DATE": "{DAY}_{MONTH}_{YEAR}",
            "DD MONTH around HH": "{DAY} {MONTH} around {HOUR}h",
            "DD MONTH at HH": "{DAY} {MONTH} at {HOUR}h",
            "DD MONTH": "{DAY} {MONTH}"
        },
        time_names: {
            days: [
                " day",
                " days",
                "d"
            ],
            hours: [
                " hour",
                " hours",
                "h"
            ],
            minutes: [
                " minute",
                " minutes",
                " min"
            ],
            seconds: [
                " second",
                " seconds",
                "s"
            ],
            weeks: [
                " week",
                " weeks",
                " w"
            ],
            months: [
                " month",
                " month",
                "m"
            ],
            years: [
                " year",
                " years",
                "y"
            ]
        }
    },
    help: {
        help_screen: {
            title: "Help page",
            description: "Thanks for using **{projectName}** v.**{version}** ! *You can check the latest patch notes, just by clicking [**here**]({lastPatchNoteLink}).*",
            fallback_message: "This category is empty :(",
            buttons: {
                website: "Website",
                support_server: "Support server",
                invite_bot: "Invite the bot"
            },
            categories: {
                STATS: "Statistics commands",
                SECONDARY_STATS: "Secondary commands",
                OTHER: "Other commands"
            }
        },
        commands: {
            graph: {
                short_description: "Generate a graph"
            },
            top: {
                short_description: "Show server rankings"
            },
            me: {
                short_description: "Show personal stats"
            },
            sync: {
                short_description: "Stats synchronization"
            },
            rawstats: {
                short_description: "Module and cache status"
            },
            botstats: {
                short_description: "Bot stats and infos"
            }
        }
    },
    graph: {
        errors: {
            fetch_error: "**Whoops!** The required data could not be retrieved to create a graph.. *If the problem happens again, please report the bug on the support server.*"
        },
        help_screen: {
            embed_title: "Create a graph",
            embed_description: "**Display** your stats or the server's stats with graphs. Start by selecting a **configuration** :",
            image_title: "Graphs",
            embed_field_server_graph: "Server graphs",
            embed_field_user_graph: "Your stats' graphs",
            components_guild_graph_select_menu: "Select a server stats graph..",
            components_user_graph_select_menu: "..or a graph with your stats!"
        },
        graph_main_screen: {
            advanced: {
                confirm_button: "Generate",
                advanced_button: "Advanced settings",
                advanced_embed_description: "**Adapt** and **customize** your graphs' interpretation and display layout.",
                advanced_embed_options_field_title: "Available options:",
                advanced_options: {
                    display_bar_chart: "Bar display",
                    increment_stats: "Cumulative sum",
                    remove_inexistant_reports: "Removing of inexistants reports",
                    display_ticks: "Point display",
                    group_values: "Statistical grouping"
                },
                timerange_select_menu: {
                    placeholder: "Select a time range..",
                    option_title: "{timeRange} display",
                    premium_only_description: "Premium only"
                }
            },
            export: {
                export_button: "Export",
                export_done: "**Graph succesfully exported !** You can open the `.csv` file with your favourite spreadsheet software.",
                export_software_import_tip: "When importing, we advise you to follow the **recommended configuration** to avoid interpretation problems :",
                export_config: [
                    [
                        "Character sets",
                        "UTF-8 / Unicode (UTF-8)"
                    ],
                    [
                        "Column separator",
                        "Comma (,)"
                    ],
                    [
                        "Line separator",
                        "Line break (\\n)"
                    ]
                ]
            }
        },
        graph_types: {
            server_messages: {
                title: "Sent Messages",
                description: "Graph by server activity in messages.",
                graph_name: "Summary of activity by messages"
            },
            server_voicetime: {
                title: "Time spent in voice",
                description: "Graph by server voice activity.",
                graph_name: "Summary of voice activity"
            },
            server_members: {
                title: "Members",
                description: "Graph by number of server members.",
                graph_name: "Summary of server members evolution"
            },
            server_deleted: {
                title: "Deleted Messages",
                description: "Graph by amount of deleted messages.",
                graph_name: "Summary of deleted messages"
            },
            server_reactions: {
                title: "Reactions",
                description: "Graph by reactions to messages.",
                graph_name: "Summary of reactions"
            },
            server_joined: {
                title: "New members",
                description: "Graph by newcomers.",
                graph_name: "Summary of newcomers"
            },
            server_left: {
                title: "Members who left",
                description: "Graph by members who left.",
                graph_name: "Summary of members who left"
            },
            user_myMessages: {
                title: "Sent Messages",
                description: "Graph by your activity in messages.",
                graph_name: "Summary of activity by messages"
            },
            user_myVoicetime: {
                title: "Time spent in voice",
                description: "Graph by your voice activity.",
                graph_name: "Summary of voice activity"
            },
            user_myReactedCount: {
                title: "Reactions",
                description: "Graph by reactions to messages.",
                graph_name: "Summary of given reactions"
            },
            user_myDeletedMessages: {
                title: "Deleted Messages",
                description: "Graph by your amount of deleted messages.",
                graph_name: "Summary of deleted messages"
            }
        }
    },
    top: {
        not_enough_data: "**Whoops!** I don't have enough data to make rankings for now.. *If the problem happens again, please report the bug on the support server.*",
        not_allowed_timerange: "**Whoops!** You can't choose a timerange longer than **{max}** days.",
        not_allowed_timestamp_low: "**Whoops!** You can't select a time range inferior to **{max}** day(s).",
        top_canvas_leaderboard_date: "Global rankings on {date}",
        top_canvas_leaderboard_temp_date: "{type} rankings from {date1} to {date2}",
        top_canvas_empty_username: "Nobody",
        top_canvas_not_found_username: "User not found",
        top_canvas_leaderboard_temp_types: {
            "0": "completes",
            "5": "incompletes",
            "10": "schematics"
        },
        pos_abbreviations: {
            "1": "st",
            "2": "nd",
            "3": "rd",
            other: "th"
        },
        stat_units: {
            messages: [
                "Messages",
                "messages"
            ],
            voice: [
                "Hours in vocal chats",
                "hours in vocal chats"
            ]
        },
        ready_to_use_timeranges: {
            image_title: "Timeranges",
            embed_title: "Select a timerange",
            embed_description: "Select a timerange for the ranking.",
            embed_data_FULL: "All data",
            embed_data_PARTIAL_5: "Partial data",
            embed_data_PARTIAL_10: "Schematic data",
            embed_data_partial_disclamer: "To limit bot overload, some of the rankings are **incomplete** or **schematics**, their stats are inaccurate but sufficient enough to calculate rankings.",
            embed_data_learn_more: "Find out more",
            components_days_acronym: "d"
        }
    },
    me: {
        errors: {
            cannot_fetch_user: "**Whoops!** Couldn't gather this user's data.. try again later !",
            data_flag_fetch_error: "**Whoops!** An error occured when gathering data for **DATA_FLAG** : `{flag}`."
        },
        card: {
            header_joined_at: "Joined on",
            header_created_at: "Created on",
            global_stats_messages: "Sent messages",
            global_stats_voice: "Hours in vocal chats",
            global_stats_leaderboard: "In rankings",
            buttons_edit: "Edit",
            units: {
                timeranges: [
                    "28d",
                    "7d",
                    "24h"
                ],
                messages: [
                    "message",
                    "messages"
                ],
                voice: [
                    "hour",
                    "hours"
                ],
                reactionsGiven: [
                    "reaction",
                    "reactions"
                ],
                deletedMessages: [
                    "message",
                    "messages"
                ]
            },
            elements: {
                messages: {
                    title: "Sent messages"
                },
                voice: {
                    title: "Time in vocal chats"
                },
                reactionsGiven: {
                    title: "Reactions"
                },
                involvement: {
                    title: "Engagement",
                    text: "Presence rate on the server/during the last month."
                },
                deletedMessages: {
                    title: "Deleted messages"
                },
                ranks: {
                    "messages-voice": {
                        title: "Activity Ranks",
                        names: {
                            X: "No data",
                            F: "Very inactive",
                            "F+": "Not very active",
                            "D-": "Not very active",
                            D: "Not very active",
                            "D+": "Not very active",
                            "C-": "Passively active",
                            C: "Passively active",
                            "C+": "Passively active",
                            "B-": "Rather active",
                            B: "Rather active",
                            "B+": "Active",
                            "A-": "Active",
                            A: "Very active",
                            "A+": "Extremely active"
                        }
                    }
                }
            }
        },
        edit: {
            errors: {
                SELECTED_LOCKED_CONTENT: "**This statistic is locked !** To use it, you must purchase it ! *In order to do that, here's what you must do :*\n\n{emoji} **Login on the website :**\n> Check out our [website]({link}), login, then when hovering your avatar, click on *'Shop'* and finally, in the left sidebar, click on 'Shop /me'.\n\n{emoji} **Purchase the statistic :**\n> When in the shop /me, select the element `{type}`, then, during the next step, purchase the statistic `{content}` !"
            },
            agreement_message: "**Important : ** before you edit your card's arrangement, you must accept we save your preferences on *all your servers*. This data will **not be deleted** if you leave this server or delete your account and will be **public**, hence why this message's important./If you **accept** the data collection and storage, press **'Accept'** below.",
            agreement_confirm_button: "Accept",
            agreement_reject_button: "Refuse",
            agreement_reject_message: "**We won't save your preferences.**\n> if you have more questions about how we manage your **data**, you can join our **Discord server**. *Otherwise, if you change your mind, you can type the command again !*",
            agreement_reject_easteregg_gif: "https://tenor.com/view/dujardin-jean-daccord-comme-ca-gif-10162502",
            main_embed_description: "**Edit** the arrangement of the statistic elements on your card. *Select an element in the dropdown menu to edit it!*",
            buttons_save: "Save",
            main_embed_fields_name: "Line {n} :",
            main_embed_select_displayed: "Displayed :",
            main_embed_select_placeholder: "Select an element",
            select_type_embed_description: "**Alright!**Select what kind of element you want to display in this location **#{n}**.",
            select_type_embed_cancelled: "**Time-out!** The element's selection has been cancelled.",
            select_content_description: "**Alright!** Select what type of statistic you wish to display in the `{name}` box.",
            select_content_menu_locked_description: "Select to purchase this statistic.",
            elements: {
                graph: {
                    title: "Graph",
                    description: "Displays a graph."
                },
                percentage: {
                    title: "Percentage",
                    description: "Displays a percentage + progression bar."
                },
                ranks: {
                    title: "Ranks",
                    description: "Evaluation from F to A+."
                },
                timeranges: {
                    title: "Time statistics",
                    description: "Displays a value in 3 time ranges."
                }
            }
        }
    },
    botstats: {
        stat_type_select_placeholder: "Select a statistic",
        graph_init_at: "Statistic manager started {x} hours ago",
        stat_types: {
            commandCount: "Ran commands",
            interactionCount: "Received interactions",
            messageCount: "Registered messages",
            cachedGuildCount: "Cached servers",
            cachedGuildMemberCount: "Cached members",
            cachedWebsiteUsersCount: "Cached users",
            ramUsage: "RAM Usage",
            databaseConnections: "Database queries"
        }
    },
    _FILE_UPDATES_INFO: {
        last_update_timestamp: 1645729005037,
        last_update_date: "24/02/2022",
        last_update_filegenerator_version: "1.0.0"
    }
}
